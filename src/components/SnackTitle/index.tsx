import { TitleProps } from '../../interfaces/snackTitle.types';
import { Title } from './styles';


export function SnackTitle({ children }: TitleProps) {
    return (
        <Title>{children}</Title>
    )
}
