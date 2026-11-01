import clsx from 'clsx'
const TableBody = ({children, className,}) => {
  return (
    <div className={clsx('py-0! divide-y divide-zinc-200 dark:divide-dark-border overflow-visible', className)}>
        {children}
    </div>
  )
}
export default TableBody