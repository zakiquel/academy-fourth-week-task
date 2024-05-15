import React, { memo } from 'react';

import Heart from "@/shared/assets/icons/heart.svg";
import { Button } from "@/shared/ui/Button";
import { Card } from '@/shared/ui/Card';

import cls from './Card.module.scss';

const CardCourse = () => (
	<Card className={cls.card}>
		<h2 className={cls.cardTitle}>Название направления</h2>
		<p className={cls.cardDescription}>Краткое описание того, чем занимаются на направлении</p>
		<div className={cls.cardFooter}>
			{/* <Button className={cls.btnSelectBtn}>Выбрать</Button> */}
			<Button className={cls.btnSelectBtn}>Выбрать</Button>
			<div className={cls.btnHeartDiv}>
				<Button> <Heart className={cls.heartIcon} /> </Button>
			</div>
		</div>
	</Card>
);


export default memo(CardCourse);
