import { memo } from 'react';

import cls from './CourseDetailsPage.module.scss';

interface CourseDetailsPageProps {
  className?: string;
}

const CourseDetailsPage = (props: CourseDetailsPageProps) => {
  const { className } = props;
  return (
    <main className={cls.CourseDetailsPage}>
      CourseDetails Page
    </main>
  );
};

export default memo(CourseDetailsPage);

