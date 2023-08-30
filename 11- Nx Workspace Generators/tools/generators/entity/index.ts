import { Tree, formatFiles, readWorkspaceConfiguration, readProjectConfiguration, generateFiles, joinPathFragments } from '@nrwl/devkit';
import { EntitySchema } from './schema';
import { strings } from '@angular-devkit/core';
import { addLibExport } from '../utils/add-lib-export2';

export default async function (host: Tree, schema: EntitySchema) {
  const workspaceConf = readWorkspaceConfiguration(host);

  if (!schema.project) {
    schema.project = workspaceConf.defaultProject;
  }

  if (!schema.project) {
    throw new Error('No project specified!');
  }

  const projConf = readProjectConfiguration(host, schema.project);

  if (projConf.projectType !== 'library') {
    throw new Error('Project is not a library!');
  }

  generateFiles(
    host,
    joinPathFragments(__dirname, 'files'),
    joinPathFragments(projConf.sourceRoot, 'lib'),
    {
      entity: strings.dasherize(schema.entity),
      templ: '',
      ...strings
    }
  );

  // index.ts
  addLibExport(host, projConf, schema.entity);


  await formatFiles(host);
}
