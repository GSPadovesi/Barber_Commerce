import { SkeletonProps } from '../../interfaces/skeleton.types';
import { SkeletonElement } from './styles'

export function Skeleton({ type }: SkeletonProps) {
    return (
        <>
            <SkeletonElement type={type} />
        </>
    );
}