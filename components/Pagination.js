import Link from "next/link"
import paginationStyles from "../styles/Pagination.module.css"

const Pagination = ({ itemsPerPage, totalItems, paginate, href }) => {
    const pageNumbers = []

    const numberOfPages = Math.ceil(totalItems / itemsPerPage)
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={paginationStyles.page}>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <Link legacyBehavior href={href}>
                            <a onClick={() => paginate(number)}>{number}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
