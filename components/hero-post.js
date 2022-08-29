import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  postName,
  date,
  slug,
  description,
  author,
  url
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={postName} slug={slug} url={url} />
      </div>
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{postName}</a>
        </Link>
      </h3>
      <div className="mb-4">
        <p>{description}</p>
      </div>
      <div className='mb-4'>
        <DateComponent dateString={date} />
      </div>
        {author && <Avatar name={author.name} picture={author.role} />}
    </section>
  )
}
