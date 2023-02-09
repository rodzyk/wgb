import { CountOfTime } from "./count-of-tome.type"

export type Episode = {
    chapter: number,
    part: number,
    title: string,
    date: Date | null,
    links: { weibo: string,mangaBilibili: string },
    time: CountOfTime,
    status?: string,
    extra: boolean
}