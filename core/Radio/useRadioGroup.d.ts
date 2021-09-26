export type ReturnType = {
  value: string | number,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  setValue: React.Dispatch<{}>,
};
declare const useRadioGroup: (defaultValue: string) => ReturnType;
export default useRadioGroup;
