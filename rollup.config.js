import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import svg from 'rollup-plugin-svg';
import { getFiles } from './utils/getFiles';

const packageJson = require('./package.json');
const extensions = ['.js', '.ts', '.jsx', '.tsx', '.svg'];

export default [
   {
      input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
      plugins: [
         resolve(),
         commonjs(),
         typescript({
            tsconfig: './tsconfig.json',
         }),
         postcss(),
         svg(),
      ],
   },
   {
      input: "dist/esm/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
    },
   {
      input: 'dist/esm/types/index.d.ts',
      output: [{ file: 'dist/index.d.ts', format: 'esm' }],
      plugins: [dts()],
      external: [/\.(css|less|scss)$/],
   },
   {
      input: 'src/images/svg/error.svg',
      output: [{ file: 'dist/@types/error.svg' }],
      plugins: [svg()],
   },
   {
      input: 'src/images/svg/cross.svg',
      output: [{ file: 'dist/@types/cross.svg', format: 'cjs' }],
      plugins: [svg()],
   },
   {
      input: 'src/images/svg/info.svg',
      output: [{ file: 'dist/@types/info.svg', format: 'es' }],
      plugins: [svg()],
   },
   {
      input: 'src/images/svg/success.svg',
      output: [{ file: 'dist/@types/success.svg', format: 'es' }],
      plugins: [svg()],
   },
   {
      input: 'src/images/svg/warning.svg',
      output: [{ file: 'dist/@types/warning.svg', format: 'es' }],
      plugins: [svg()],
   },
];
