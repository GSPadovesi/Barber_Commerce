
interface HeadProps {
    title: string;
    description?: string;
}

export function Head({title, description = ''}: HeadProps){
    document.title = `Barber Commerce | ${title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    return null
}