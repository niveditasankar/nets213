public class Review {

	private User author;
	private String text;
	private double ranking;

	public Review(User user, String text) {
		this.author = user;
		this.text = text;
		ranking = 0.0
	}

	public getAuthorName() {
		return author.getName();
	}

	public getAuthorID() {
		return author.getID();
	}

	public String getText() {
		return text;
	}

	public double getRank() {
		return ranking;
	}

	public void voteRank(Boolean positive) {
		if (positive) {
			ranking += 1.0;
		}
		else {
			ranking -= 1.0;
		}
	}
}