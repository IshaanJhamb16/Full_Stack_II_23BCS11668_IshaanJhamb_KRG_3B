import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    // GET /patients
    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        List<Patient> patients = Arrays.asList(
            new Patient(1L, "John Doe", 30),
            new Patient(2L, "Jane Smith", 25),
            new Patient(3L, "Bob Johnson", 45)
        );
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    // POST /patients
    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        // Printing to console as requested
        System.out.println("Received Patient: " + patient.toString());
        
        return new ResponseEntity<>(patient, HttpStatus.CREATED);
    }
}