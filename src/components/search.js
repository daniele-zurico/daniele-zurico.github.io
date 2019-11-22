import React from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styles from "./search.module.css"

const Search = ({ searchIndex }) => {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState([])
  let index = null

  const getOrCreateIndex = () => {
    return index ? index : Index.load(searchIndex)
  }

  const search = evt => {
    const query = evt.target.value
    setQuery(query)
    index = getOrCreateIndex()
    const results = index.search(query, { expand: true }).map(({ ref }) => {
      return index.documentStore.getDoc(ref)
    })
    setResults(results)
  }

  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={search}
        />
        <div className={styles.search}></div>
      </div>
      <ul>
        {results.map(page => (
          <li key={page.id}>
            <Link to={"/" + page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
