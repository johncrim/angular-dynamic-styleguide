/*!
 * Copyright 2018 Fintellect, Inc. All Rights Reserved.
 */


import { Compiler, COMPILER_OPTIONS, CompilerFactory, CompilerOptions, NgModule, ViewEncapsulation } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

const compilerOptions: CompilerOptions = {
  useJit: true,
  defaultEncapsulation: ViewEncapsulation.None
};

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler([compilerOptions]);
}

/**
 * Include this module to use {@link Compiler} in production builds.
 * Unfortunately, even with this, we can't run style-guide using --configuration production, due to:
 * https://github.com/angular/angular/issues/27584
 */
@NgModule({
  providers: [
    { provide: COMPILER_OPTIONS, useValue: compilerOptions, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ]
})
export class RuntimeCompilerModule { }
