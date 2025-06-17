import {
    FaHouse,
    FaList,
    FaCheck,
    FaClipboardList,
    type IconType,
} from '../../utils/Icons'
import { Button } from '../Button'
import styles from './tasksFilters.module.scss'

import './tasksFilters.module.scss'

type FilterPaths = 'all' | 'important' | 'completed' | 'incompleted'

export interface TasksFilter {
    label: {
        Icon: IconType
        text: string
    }
    pathname: FilterPaths
    onClick: () => void
}

const filters: TasksFilter[] = [
    {
        label: { Icon: FaHouse, text: 'All Tasks' },
        pathname: 'all',
        onClick: () => {},
    },
    {
        label: { Icon: FaList, text: 'Important' },
        pathname: 'important',
        onClick: () => {},
    },
    {
        label: { Icon: FaCheck, text: 'Completed' },
        pathname: 'completed',
        onClick: () => {},
    },
    {
        label: { Icon: FaClipboardList, text: 'Do it now' },
        pathname: 'incompleted',
        onClick: () => {},
    },
]

export const TasksFilters = () => {
    return (
        <div>
            {filters.map(({ label, pathname, onClick }) => (
                <Button
                    classname={`${styles.filterButton} ${
                        pathname === 'all' && styles.active
                    }`}
                    onClick={onClick}
                >
                    {<label.Icon />} {label.text}
                </Button>
            ))}
        </div>
    )
}
