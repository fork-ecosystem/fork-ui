export type ReturnType = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<boolean>,
  doOpen: () => void,
  doClose: () => void,
  doToggle: () => void,
};
declare const useDrawer: (defaultIsOpen: boolean) => ReturnType;
export default useDrawer;
