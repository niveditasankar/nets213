public class User {

	private int id;
	private String name;
	Set<Review> reviews;
	int numHidden;


	public User(int id, String name) {
		this.id = id;
		this.name = name;
		reviews = new HashSet<Review>();
		numHidden = 0;
	}

	public getName() {
		return this.name;
	}

	public getID() {
		return this.id;
	}

	public addReview(Review r) {

		/*Review should be initialized outside of this, when
		creating the Review in the run class module / adding
		it to Course.java, and then User.addReview(r) is called.
		*/

		// Review r = new Review(this.id, text);
		review.add(r);
	}

	public void addHidden() {
		numHidden += 1;
	}

	public int numReviews() {
		return reviews.size();
	}
}