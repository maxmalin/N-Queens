#include <iostream>
using namespace std;

int n = 15;

int solutionCount = 0;
int ones = (1 << n) - 1;

void checker (int col, int minor, int major) {
	int j;
	for (int i = ~(col|major|minor)&ones; i>0; i=i^j) {
		j = -i&i;
		checker(col|j, (minor|j) << 1, (major|j) >> 1);
	}
	if (col == ones) {
		solutionCount++;
	}
}

int main () {
	time_t start = time(NULL);
	int j;
	for (int i = (1 << (n/2)) - 1; i>0; i=i^j) {
		 j = -i&i;
		 checker (j, j << 1, j >> 1);
	}
	solutionCount *= 2;
	if (n % 2 == 1) {
		 checker (1 << n/2, 1 << (n/2 + 1), 1 << (n/2 - 1));
	}
	time_t end = time(NULL);
	cout << (end - start) << endl;
	cout << solutionCount;
	return 0;
}
		