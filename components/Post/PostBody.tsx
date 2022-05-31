type Props = {
	title: string
	body: string
	image: string
}
function PostBody({ title, body, image }: Props) {
	return (
		<div>
			<div className="py-4 ">
				<h2 className="text-xl font-semibold">{title}</h2>
				<p className="mt-2 text-sm font-light">{body}</p>
			</div>
			<img className="w-full" src={image} alt="" />
		</div>
	)
}
export default PostBody
