import { useEffect, useState } from "react";
import { RepositoryList } from "../../components/RepositoryList";
import { SearchBar } from "../../components/SearchBar";
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
            if (!response.ok) {
                setRepositories([])
                document.getElementById('error')!.innerHTML = 'Organização inválida'
                throw response
            }
            return response.json()  //we only get here if there is no error

        }).then(data => {
            document.getElementById('error')!.innerHTML = ''
            setRepositories(data)
        })
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
            <span id="error"></span>
        </Container>
    )
}