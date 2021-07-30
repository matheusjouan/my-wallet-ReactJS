import { useCallback } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useTheme } from '../../../hooks/theme';

import emojiList from '../../../utils/emoji';
import { ToggleSwitch } from '../../ToggleSwitch';

import { Container, Profile, UserName, Welcome  } from './styles'

export function MainHeader() {

  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true: false);

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojiList.length);
    return emojiList[index];
  }, []);

  const handleChangeTheme = useCallback(() => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  },[darkTheme, toggleTheme])

  return (
    <Container>
      
      <ToggleSwitch
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <Profile>
        <Welcome>Olá {emoji} </Welcome>
        <UserName>Matheus Jouan</UserName>
      </Profile>
    </Container>
  )
}