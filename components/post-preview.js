import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
// import CoverImage from './cover-image'

export default function PostPreview({
  postName,
  date,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage title={title} slug={slug} url={coverImage.url} /> */}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{postName}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      {author && <Avatar name={author.name} picture={author.role} />}
    </div>
  )
}