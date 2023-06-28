---
layout: post
title:  "Lựa chọn đặc trưng trong học máy bằng Chi-Square"
categories: Machine-Learning
author: zhao
tags: ["feature", "machine-learning", "Data Science", "Statistics", "Machine Learning", "Feature Selection", "Python"]
img-feature: /assets/media/feature/no-ron-sinh-hoc.png
---

We always wonder where the Chi-Square test is useful in machine learning and how this test makes a difference. Feature selection is an important problem in machine learning, where we will be having several features in line and have to select the best features to build the model. The chi-square test helps you to solve the problem in feature selection by testing the relationship between the features. In this article, I will guide through

a. Chi-Square distribution.

b. Chi-Square Test for Feature Selection

c. Chi-Square Test using Python

Chi-Square distribution
A random variable ꭓ follows chi-square distribution if it can be written as a sum of squared standard normal variables.


Z1, Z2.. are standard normal variables
Degrees of freedom:
Degrees of freedom refers to the maximum number of logically independent values, which have the freedom to vary. In simple words, it can be defined as the total number of observations minus the number of independent constraints imposed on the observations.



In the above figure, we could see Chi-Square distribution for different degrees of freedom. We can also observe that as the degrees of freedom increase Chi-Square distribution approximates to normal distribution.


Chi-Square Test for Feature Selection
A chi-square test is used in statistics to test the independence of two events. Given the data of two variables, we can get observed count O and expected count E. Chi-Square measures how expected count E and observed count O deviates each other.


Let’s consider a scenario where we need to determine the relationship between the independent category feature (predictor) and dependent category feature(response). In feature selection, we aim to select the features which are highly dependent on the response.

When two features are independent, the observed count is close to the expected count, thus we will have smaller Chi-Square value. So high Chi-Square value indicates that the hypothesis of independence is incorrect. In simple words, higher the Chi-Square value the feature is more dependent on the response and it can be selected for model training.

Steps for Chi-Square Test with an example:

Consider a data-set where we have to determine why customers are leaving the bank, let’s perform a Chi-Square test for two variables. Gender of a customer with values as Male/Female as the predictor and Exited describes whether a customer is leaving the bank with values Yes/No as the response. In this test we will check is there any relationship between Gender and Exited.

Steps to perform the Chi-Square Test:

Define Hypothesis.
Build a Contingency table.
Find the expected values.
Calculate the Chi-Square statistic.
Accept or Reject the Null Hypothesis.
1.Define Hypothesis
Null Hypothesis (H0): Two variables are independent.

Alternate Hypothesis (H1): Two variables are not independent.

2. Contingency table
A table showing the distribution of one variable in rows and another in columns. It is used to study the relation between two variables.


Contingency table for observed values
Degrees of freedom for contingency table is given as (r-1) * (c-1) where r,c are rows and columns. Here df = (2–1) * (2–1) = 1.

In the above table we have figured out all observed values and our next steps are to find expected values, get the Chi-Square value and check for relationship.

3. Find the Expected Value
Based on the null hypothesis that the two variables are independent. We can say if A, B are two independent events


Let’s calculate the expected value for the first cell that is those who are Males and are Exited from the bank.


The calculation for the expected value
In similar, we calculate E2, E3, E4 and get the following results.


Expected values
4. Calculate Chi-Square value
Summarizing the observed values and calculated expected values into a table and determine the Chi-Square value.



We can see Chi-Square is calculated as 2.22 by using the Chi-Square statistic formula.

5. Accept or Reject the Null Hypothesis
With 95% confidence that is alpha = 0.05, we will check the calculated Chi-Square value falls in the acceptance or rejection region.

Having degrees of freedom =1(calculated with contingency table) and alpha =0.05 the Chi-Square value is 3.84.

The Chi-Square values can be determined with the Chi-Square table.

The chi-square distribution is the right side since the difference in Observed and Expected is large.


In the above fig, we can see Chi-Square ranges from 0 to inf and alpha ranges from 0 to 1 in the opposite direction. We will reject the Null hypothesis if Chi-Square value falls in the error region (alpha from 0 to 0.05 ).

So here we are accepting the null hypothesis since the Chi-Square value is less than the critical Chi-Square value.

To conclude the two variables are independent, Gender variable cannot be selected for training the model.


Limitations
Chi-Square is sensitive to small frequencies in cells of tables. Generally, when the expected value in a cell of a table is less than 5, chi-square can lead to errors in conclusions.

ote: Here we considered samples with size 400 and for the larger samples the results may vary.

Chi-Square Test using Python
Here is the below code, on how to perform the Chi-Square test using python.

You can find the same on GitHub too.

So far we learned about having the categorical response and categorical predictor but what if we have the continuous response and categorical predictor ??? We will use ANOVA. Please do check on my article ANOVA for Feature Selection in Machine Learning.

If you are curious to learn about feature selection methods. Here is the article in depth.

https://neptune.ai/blog/feature-selection-methods

Hope you enjoyed it !!! Please do comment on any queries or suggestions.