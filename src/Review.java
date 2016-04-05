public class Review {

	User author;
	String text;
	double ranking;

	public Review(User user, String text) {
		this.author = user;
		this.text = text;
		ranking = 0.0
	}
}