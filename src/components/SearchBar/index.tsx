import { useState } from "react"
import { Container } from "./style"


interface SearchBarProps {
    handleNewRepositories: (orgs: string) => void
    filterRepositories: (filt: string) => void
}
export function SearchBar({ handleNewRepositories, filterRepositories }: SearchBarProps) {
    const [org, setOrg] = useState('')
    const [repoName, setRepoName] = useState('')
    return (
        <Container>
            <h1>Lista de Repositórios</h1>
            <div>
                <input type="text"
                    placeholder="Digite a Organização"
                    value={org}
                    onChange={event => setOrg(event.target.value)} />
                <button
                    onClick={() => {
                        handleNewRepositories(org)
                        setOrg('')
                    }}>Carregar Repositórios</button>

                <input type="text"
                    placeholder="Digite o nome do repositório"
                    value={repoName}
                    onChange={event => setRepoName(event.target.value)} />
                <button
                    onClick={() => {

                        filterRepositories(repoName)
                        setRepoName('')
                    }}>Filtrar</button>
            </div>
        </Container>
    )
}