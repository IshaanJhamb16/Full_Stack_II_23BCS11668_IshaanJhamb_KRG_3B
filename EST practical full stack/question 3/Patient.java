public class Patient {
    private Long id;
    private String name;
    private int age;

    // Constructors
    public Patient(Long id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
    
    @Override
    public String toString() {
        return "Patient{id=" + id + ", name='" + name + "', age=" + age + "}";
    }
}
