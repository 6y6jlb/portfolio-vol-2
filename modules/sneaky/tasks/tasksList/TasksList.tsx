'use client'
import { Task } from '@/service/types'
import TaskItem from '../taskItem/TaskItem'
import styles from './styles.module.css'
import React from 'react'
import { useTranslations } from 'next-intl'



const TasksList = ({ tasks }: IProps) => {

    const t = useTranslations("common");

    if (!(tasks && tasks.length)) {
        return (
            <div>{t('tasks.empty')}</div>
        )
    }

    const mappedTasks = React.useMemo(() => {
        return tasks.map((task) => {
            return (
                <TaskItem key={task._id} task={task} />
            )
        })
    }, [tasks])

    return (
        <div className={styles.list}>{mappedTasks}</div>
    )
}

export default TasksList


interface IProps {
    tasks: Task[] | undefined
}