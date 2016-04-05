public class Professor {

	private int id;
	private String name;
	Set<Review> reviews;

	public Professor(int id, String name) {
		this.id = id;
		this.name = name;
		reviews = new HashSet<Review>();
	}

	public String getName() {
		return this.name;
	}

	public int getID() {
		return this.id;
	}

	public void addReview(Review r) {

		//Review should be initialized just before this class
		review.add(r);
	}

	//Deletes hidden review from review set
	public void remove(Review r) {
		reviews.remove(r);
	}
}