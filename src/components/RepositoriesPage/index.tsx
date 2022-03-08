import { useEffect, useState } from "react";
import { RepositoryList } from "../RepositoryList";
import { SearchBar } from "../SearchBar";
import { Container } from "./style";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoriesPage() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    function handleNewRepositories(org: string) {
        fetch(`https://api.github.com/orgs/${org}/repos`).then(response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error

        }).then(data => setRepositories(data))
    }
    function filterRepositories(filt: string) {
        const auxRepositories = repositories.filter((repositorie) => {
            return repositorie.name.includes(filt)
        });
        setRepositories(auxRepositories)
    }
    return (
        <Container>
            <SearchBar handleNewRepositories={handleNewRepositories} filterRepositories={filterRepositories} />
            <RepositoryList repositories={repositories} />
        </Container>
    )
}