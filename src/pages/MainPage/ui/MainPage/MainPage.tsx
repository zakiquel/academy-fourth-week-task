import React, { memo } from 'react';

import { CourseCard } from "@/entities/Course";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { Theme } from "@/shared/const/theme";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/Button";

import cls from './MainPage.module.scss'

const MainPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main
      className={cls.MainPage}
    >
      <Button
        variant='clear'
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
      Main Page
      <CourseCard />
    </main>
  )
}

export default memo(MainPage);