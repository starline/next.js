import { useEffect, useState } from "react"


/**
 * Используем suppressHydrationWarning="true" для обхода ошибки
 * из-за разного содержания контента на сервере и клиенте
 *
 */
export default function Timer() {

    // Утснавливаем начальные значения
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timerID: NodeJS.Timer = setInterval(
            () => {
                setDate(new Date())
                setCount(count+1)
            }, 1000
        )

        return (() => {
           clearInterval(timerID)
        })
    })

    return (
        <>
        <div className="product_item_time" suppressHydrationWarning={true}>{date.toLocaleTimeString()}</div>
        <div className="count">{count} секунды</div>
        </>
    )
}
