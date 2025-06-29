package exercise2;

public class ApiService {
    private RestClient restClient;

    public ApiService(RestClient restClient) {
        this.restClient = restClient;
    }

    public String fetchData() {
        return "Fetched " + restClient.getResponse();
    }
}
