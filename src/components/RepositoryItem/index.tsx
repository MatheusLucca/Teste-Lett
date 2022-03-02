import { Container } from "./style";

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;

    }
}
export function RepositoryItem({ repository }: RepositoryItemProps) {
    return (
        <Container>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>
                Acessar Repositório
            </a>
        </Container>
    )
}