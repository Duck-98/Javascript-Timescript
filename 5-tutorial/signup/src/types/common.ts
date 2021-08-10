export type AnyObject = {
  [key: string]: any;
}

export type ValidateRule = {
  rule: RegExp; //정규식
  match: boolean;
  message: string;
}
