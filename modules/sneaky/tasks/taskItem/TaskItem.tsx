'use client'
import { TaskType } from "@/service/task/types";
import { useTranslations } from "next-intl";
import styles from './styles.module.css';

export default function TaskItem({ task, onRemove }: IProps) {
	const t = useTranslations("common");
	return (
		<div className={styles.taskContainer}>
			<p>#{task._id}</p>
			<p><span>{t('tasks.user_id')}&nbsp;&ndash;&nbsp;</span>#{task.user_id}</p>
			<p>{t(task.is_regular ? 'tasks.regular' : 'tasks.once')}</p>
			<p>{t(task.queue ? 'tasks.queue' : 'tasks.waiting')}</p>
			<p><span>{t('tasks.call_at')}</span>&nbsp;{task.call_at}&nbsp;&ndash;&nbsp;<span>{t('tasks.timezone')}</span>&nbsp;{task.tz}</p>
			<div className={styles.options}>
				{
					task.options.map((option, i) => {
						return (
							<p key={i}>
								<span>{option.event_type}</span>
								<span>{option.param}</span>
							</p>
						)
					}
					)
				}
			</div>
			<button
				className={styles.btnRemove + ' btn-secondary'}
				onClick={onRemove}
			>
				x
			</button>
		</div>
	)
}

interface IProps {
	task: TaskType
	onRemove: () => void
}