import { NativeModules } from 'react-native';

interface NativeVariantsType {
  multiply(a: number, b: number): Promise<number>;
}

const { NativeVariants } = NativeModules;

export default NativeVariants as NativeVariantsType;
