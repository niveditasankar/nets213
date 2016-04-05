public class Professor {

	private int id;
	private String name;
	Set<Review> reviews;

	private double difficulty;
	private double helpfulness;
	private double engagement;
	private double overall;

	public Professor(int id, String name) {
		this.id = id;
		this.name = name;
		reviews = new HashSet<Review>();

		this.difficulty = 0.0;
		this.helpfulness = 0.0;
		this.engagement = 0.0;
		this.overall = 0.0;		
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

	public Set<Review> getReviews() {
		return reviews;
	}

	public double getDifficulty() {
		return this.difficulty;
	}

	public double getHelpfulness() {
		return this.helpfulness;
	}

	public double getEngagement() {
		return this.engagement;
	}

	public double getOverall() {
		return this.overall;
	}

	public double setDifficulty(double var) {
		this.difficulty = var;
	}

	public double setHelpfulness(double var) {
		this.helpfulness = var;
	}

	public double setEngagement(double var) {
		this.engagement = var;
	}

	public double setOverall(double var) {
		this.overall = var;
	}
}