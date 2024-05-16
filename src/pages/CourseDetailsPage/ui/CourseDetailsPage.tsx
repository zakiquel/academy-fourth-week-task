import { memo } from 'react';

import cls from './CourseDetailsPage.module.scss';

interface CourseDetailsPageProps {
  className?: string;
}

export const CourseDetailsPage = memo((props: CourseDetailsPageProps) => {
  const { className } = props;
  return (
    <main className={cls.CourseDetailsPage}>
      ..
    </main>
  );
});
