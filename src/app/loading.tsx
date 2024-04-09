import { Skeleton } from "@/components/shadcn/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[60px] w-[500px] rounded-xl" />
            <Skeleton className="h-[60px] w-[500px] rounded-xl" />
            <Skeleton className="h-[60px] w-[500px] rounded-xl" />
            <Skeleton className="h-[60px] w-[500px] rounded-xl" />
            <Skeleton className="h-[60px] w-[500px] rounded-xl" />
            <div className="flex">
                <Skeleton className="h-[45px] w-[100px] rounded-xl" />
                <Skeleton className="h-[45px] w-[100px] rounded-xl" />
            </div>
        </div>
    )
}

export default function () {
    return (
        <SkeletonCard />
    )
}