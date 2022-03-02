import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./style";


interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    useEffect(() => {
        fetch('https://api.github.com/users/MatheusLucca/repos').then(
            response => response.json()
        ).then(data => setRepositories(data))
    })
    return (
        <Container>
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => { return <RepositoryItem repository={repository} /> })}
            </ul>
        </Container>
    )
}