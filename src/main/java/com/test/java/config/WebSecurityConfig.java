package com.test.java.config;

import com.test.java.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebMvc
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    @Autowired
    private UserDetailsServiceImpl jwtUserDetailsService;
    @Autowired
    private JwtRequestFilter jwtRequestFilter;
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
// configure AuthenticationManager so that it knows from where to load
// user for matching credentials
// Use BCryptPasswordEncoder
        auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        // We don't need CSRF for this example
        httpSecurity.csrf().disable().cors().and()
                // dont authenticate this particular request
                    .authorizeRequests().antMatchers("/login","/DeleteUserById/{id}","/updateUser/{id}","updateTypeAbonnement/{id}","/allBonReduction","/createRole","/getUtilisateurByEmail/{email}","/getBonByCode/{code}","/allPaiements","/createAstuce","/AstuceyId/{id}","/allAstuce","/DeleteAstuceById/{id}","/updatePaiement/{id}","/GetPaiementById/{id}","/DeletePaiementById/{id}","/createQuestion","/createQuestion/{Question}/{admin}","/activeCompte/{id}","/desactiveCompte/{id}","/allReponses","/GetReponseById/{id}","/allSousReponses","/createReponse","/createSousReponse","/GetSousReponseById/{id}","/allTypeAbonnement","/createTypeAbonnement","/GetTypeAbonnementById/{id}","/allUsers","/upload","/deletefiles/{id}","/files","/files/{id}","/DeleteReponseById/{id}","/GetUserById/{id}","/updateAstuce/{id}/{libelle}/{admin}","/addUserClient","/updateQuestion/{id}/{Question}/{admin}","/GetQuestionById/{id}","/sousreponsesByIdReponse/{id}","/allAdmin","/ingredientsByIdReponse/{id}","/createBonReduction/{pourcentage}/{admin}","/questionByReponse/{id}","/allAbonnement","/allQuestions","/DeleteQuestionById/{id}","/updateAdmin/{id}","/createAdmin","/createBonReduction","/allIngredients","/createIngredient","/updateIngredient/{id}","/DeleteIngredientById/{id}","/GetIngredientById/{id}","/GetBonReductionById/{id}","/DeleteBonReductionById/{id}","/AstuceyId/{id}","/updateBonReduction/{id}","/GetAbonnementById/{id}","/DeleteAbonnementById/{id}","/createAbonnement","/DeleteAdminById/{id}","/updateAbonnement/{id}","/allTypePaiement","/DeleteTypePaiementById/{id}","/GetAdminById/{id}","/GetTypePaiementById/{id}","/createTypePaiement","/updateTypePaiement/{id}").permitAll().
                // all other requests need to be authenticated
                        anyRequest().authenticated().and().
                // make sure we use stateless session; session won't be used to
                // store user's state.
                        exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        // Add a filter to validate the tokens with every request
        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
