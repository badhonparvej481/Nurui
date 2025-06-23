// declare module for raw imports
declare module "*.tsx?raw" {
  const content: string;
  export default content;
}
