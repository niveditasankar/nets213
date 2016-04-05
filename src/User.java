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

		//Review should be initialized earlier
		// Review r = new Review(this.id, text);
		review.add(r);
	}

	public void addHidden() {
		numHidden += 1;
	}
}