public class QC {

	/*voteRank() (rank is a double)
	call voteRank(true) to increment, voteRank(false) to decrement
	getRank*/

	void adjustRanking(User u) {
		int totalReviews = u.getNumReviews();
		int hiddenReviews = u.getHiddenReviews() + 1;
		u.setHiddenReviews() = hiddenReviews;
		double ratio;


	}



	void hideReview(Review r, User u, Professor p) {
		if (r.getAggVotes() < -15) {
			r.hide();
			p.remove(r);
			adjustRanking(u);
			return;
		}
	}

}