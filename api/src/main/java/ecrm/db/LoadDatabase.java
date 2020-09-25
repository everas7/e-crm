package ecrm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(EmployeeRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Employee("John", "Doe", "40200462531", "8095556576", "Sales")));
      log.info("Preloading " + repository.save(new Employee("Peter", "Parker", "11200462531", "8094026576", "IT")));
      log.info("Preloading " + repository.save(new Employee("Bruce", "Wayne", "40222462531", "8095558909", "HR")));
      log.info("Preloading " + repository.save(new Employee("Clark", "Kent", "40234462524", "8094021010", "HR")));
      log.info("Preloading " + repository.save(new Employee("Diana", "Prince", "11256462553", "8494023121", "Sales")));
      log.info("Preloading " + repository.save(new Employee("Barbara", "Gordon", "40278462671", "8293416512", "IT")));
    };
  }
}