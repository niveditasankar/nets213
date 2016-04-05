public class Aggregation {
	Professor p;
	HashSet<Review> reviews;

	public Aggregation(Professor p) {
		this.p = p;
		this.reviews = p.getReviews();
		calcScores(); 
	}

	public calcScores() {
		double totalRank = 0;
		double finalDifficulty = 0; 
		double finalHelpfulness = 0;
		double finalEngagement = 0; 
		double finalOverall = 0; 
		double userDifficulty = 0; 
		double userHelpfulness = 0;
		double userEngagement = 0;
		double userOverall =0;
		double userRank = 0; 
		for (int r = 0; r < reviews.size(); r++) {
			User currentUser = r.getUser();
			totalRank += currentUser.getRank();
		}

		for (int r = 0; r < reviews.size(); r++) {
			User currentUser = r.getUser();
			userRank = currentUser.getRank();
			//calculate difficulty
			userDifficulty = r.getDifficulty();  
			finalDifficulty += userRank/totalRank * userDifficulty; 

			//calculate helpfulness
			userHelpfulness = r.getHelpfulness();  
			finalHelpfulness += userRank/totalRank * userHelpfulness; 

			//calculate engagement
			userEngagement = r.getEngagement();  
			finalEngagement += userRank/totalRank * userEngagement; 

			//calculate overall
			userOverall= r.getOverall();  
			finalOverall+= userRank/totalRank * userOverall; 
		}

		p.setDifficulty(finalDifficulty);
		p.setHelpfulness(finalHelpfulness);
		p.setEngagement(finalEngagement); 
		p.setOverall(finalOverall);
	}


}