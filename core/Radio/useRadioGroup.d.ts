export type ReturnType = {
  value: string | number,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  setValue: React.Dispatch<{}>,
};
declare const useRadioGroup: (defaultValue: any) => ReturnType;
export default useRadioGroup;
