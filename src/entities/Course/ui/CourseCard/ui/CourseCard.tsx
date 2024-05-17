import React, { memo } from 'react';

import Heart from "@/shared/assets/icons/heart.svg";
import { Button } from "@/shared/ui/Button";
import { Card } from '@/shared/ui/Card';
import { Icon } from "@/shared/ui/Icon";

import cls from './CourseCard.module.scss';

export const CourseCard = memo(() => (
	<div className={cls.test}>
		<Card className={cls.card}>
			<div className={cls.cardHeader}>
				<h2 className={cls.cardTitle}>Название направления</h2>
				<p className={cls.cardDescription}>Краткое описание того, чем занимаются на направлении</p>
			</div>
			<div className={cls.cardFooter}>
				<Button variant='stroke' className={cls.btnSelectBtn}>Выбрать</Button>
				<div className={cls.btnHeartDiv}>
					<Button variant='clear'>
						<Icon Svg={Heart} className={cls.heartIcon} />
					</Button>
				</div>
			</div>
		</Card>
		<Card className={cls.card}>
			<div className={cls.cardHeader}>
				<h2 className={cls.cardTitle}>Название направления</h2>
				<p className={cls.cardDescription}>Краткое описание того, чем занимаются на направлении</p>
			</div>
			<div className={cls.cardFooter}>
				<Button variant='filled' className={cls.btnSelectBtn}>Выбрать</Button>
				<div className={cls.btnHeartDiv}>
					<Button variant='clear' >
						<Icon Svg={Heart} className={cls.heartIcon} />
					</Button>
				</div>
			</div>
		</Card>
	</div>
));
