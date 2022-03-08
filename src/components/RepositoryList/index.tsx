import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./style";


interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

interface RepositoryListProps {
    repositories: Repository[];
}
export function RepositoryList({ repositories }: RepositoryListProps) {

    return (
        <Container>

            <ul>
                {repositories.map(repository => { return <RepositoryItem key={repository.id} repository={repository} /> })}
            </ul>
        </Container>
    )
}