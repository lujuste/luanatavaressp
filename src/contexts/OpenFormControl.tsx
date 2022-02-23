import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SidebarDrawerContextProps {
  children: ReactNode;
}

const FormControlContext = createContext({});

export function FormControlProvider({ children }: SidebarDrawerContextProps) {
  const [isOpenForm, setIsOpenForm] = useState<any>(true);

  const handleOpenForm = () => {
    setIsOpenForm(!isOpenForm);
    console.log(isOpenForm, 'ESTADO ATUALL!!!!!!');
  };

  return (
    <FormControlContext.Provider
      value={{ isOpenForm, setIsOpenForm, handleOpenForm }}
    >
      {children}
    </FormControlContext.Provider>
  );
}

export const useFormControlContext = () => useContext(FormControlContext);
